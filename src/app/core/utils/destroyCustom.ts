import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { inject, DestroyRef } from "@angular/core"

/**
 * Nuestro custom takeUntilDestroy
 * @returns
 */
export const destroyCustom = () => {
    const subject = new Subject()

    inject(DestroyRef).onDestroy(() => {
        console.log('SE DESTRUYE EL COMPONENTE MEDIANTE EL DESTROYCUSTOM')
        subject.next(true)
        subject.complete()
    })

    return <T>() => takeUntil<T>(subject.asObservable())
}