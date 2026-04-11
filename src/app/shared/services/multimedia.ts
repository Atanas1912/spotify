import { Injectable, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TrackModel } from '@core/models/tracks-model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Multimedia {
  callback: EventEmitter<any> = new EventEmitter<any>();
  
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio?: HTMLAudioElement
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio()
    }

    this.trackInfo$.subscribe(responseOK => {
      if(responseOK){
        console.log('servicio multimedia, ', responseOK)
        this.setAudio(responseOK)
      }
    })

    this.listenAllEvents()
   }

   private listenAllEvents(): void {
    this.audio?.addEventListener('timeupdate', this.calculateTime , false)
    this.audio?.addEventListener('playing', this.setPlayerStatus , false)
    this.audio?.addEventListener('play', this.setPlayerStatus , false)
    this.audio?.addEventListener('pause', this.setPlayerStatus , false)
    this.audio?.addEventListener('ended', this.setPlayerStatus , false)
   }

   private calculateTime = () => {
    const currentTime = this.audio?.currentTime
    const duration = this.audio?.duration

    //console.table([duration, currentTime, this.timeElapsed$])
    this.setTimeElapsed(currentTime)
    this.setTimeRemaining(currentTime, duration)
    this.setPercentage(currentTime, duration)
   }

   private setPlayerStatus = (state: any) => {
    console.log('STATE => ', state)
    switch(state.type){
      case 'play':
        this.playerStatus$.next('play') //asi se pasa el estado al behaviorSubject
        break;
      case 'playing':
        this.playerStatus$.next('playing')
        break;
      case 'ended':
        this.playerStatus$.next('ended')
        break;
      default:
        this.playerStatus$.next('paused')
        break;
    }
   }
   
   private setTimeElapsed(currentTime : number | undefined): void {
    const currentTimeValue = currentTime || 0

    let seconds = Math.floor(currentTimeValue % 60)
    let minutes = Math.floor((currentTimeValue / 60) % 60)

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
   }

   private setPercentage(currentTime : number | undefined, duration : number | undefined){
    const currentTimeValue = currentTime || 0
    const durationValue = duration || 0
    
    let percentage = (currentTimeValue * 100) / durationValue;
    this.playerPercentage$.next(percentage)
   }

   private setTimeRemaining(currentTime: number | undefined, duration: number | undefined){
    const currentTimeValue = currentTime || 0
    const durationValue = duration || 0
    let timeLeft = durationValue - currentTimeValue

    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)
    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
    const displayFormat = `-${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
   }

   private normalizeAudioUrl(url: string): string {
    if (!url) {
      return url
    }

    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url
    }

    const origin = new URL(environment.api).origin

    if (url.startsWith('//')) {
      return `${origin}/${url.replace(/^\/\//, '')}`
    }

    if (url.startsWith('/')) {
      return `${origin}${url}`
    }

    return `${origin}/${url}`
   }

   public togglePlayer():void {
      (this.audio?.paused) ? this.audio?.play() : this.audio?.pause()
    }

    public seekAudio = (percentage: number) => {
      if (!this.audio) {return}
      const duration = this.audio?.duration
      const percentageToSecond = (percentage * duration) /100
      this.audio.currentTime = percentageToSecond
    }

   public setAudio(track:TrackModel): void {
    if (!this.audio) {
      return
    }

    this.audio.src = this.normalizeAudioUrl(track.url)
    this.audio.play()
   }
}