import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { inject } from "@angular/core"

export const authorizationInterceptor = (request:HttpRequest<unknown>, next:HttpHandlerFn) => {
/**
 * Interceptor functional session
 * @param request
 * @param next
 * @returns
 */
    const cookieService = inject(CookieService)

    try {
      const token = cookieService.get('token')
      let newRequest = request
      newRequest = request.clone(
        {
          setHeaders: {
            authorization: `Bearer ${token}`,
            CUSTOM_HEADER: 'HOLA'
          }
        }
      )
      console.log('HE PASADO, ', newRequest)
      return next(newRequest);

    } catch (e) {
      console.log('🔴🔴🔴 Ojito error', e)
      return next(request);
    } 
}