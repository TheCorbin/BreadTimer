// import { Injectable, NgModule, Pipe, PipeTransform } from '@angular/core';
// import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
// import { Observable, of } from 'rxjs';


// const translations: any = {};

// class FakeLoader implements TranslateLoader {
//   getTranslation(lang: string): Observable<any> {
//     return of(translations);
//   }
// }

// @Pipe({
//   name: 'translate'
// })
// export class TranslatePipeMock implements PipeTransform {
//   public name = 'translate';

//   public transform(query: string, ...args: any[]): any {
//     return query;
//   }
// }

// @Injectable()
// export class TranslateServiceStub {
//   public get<T>(key: T): Observable<T> {
//     return of(key);
//   }

//   public setDefaultLang (langValue: string) {
//     console.log('this is the default lang choice', langValue);
//   }

//   public getBrowserLang () {
//     return 'en';
//   }

//   public use(langValue: string) {
//     console.log('this is the lang choice', langValue);
//   }
// }

// @NgModule({
//   declarations: [
//     TranslatePipeMock
//   ],
//   providers: [
//     { provide: TranslateService, useClass: TranslateServiceStub },
//     { provide: TranslatePipe, useClass: TranslatePipeMock },
//   ],
//   imports: [
//     TranslateModule.forRoot({
//       loader: { provide: TranslateLoader, useClass: FakeLoader },
//     })
//   ],
//   exports: [
//     TranslatePipeMock,
//     TranslateModule,
//     // FakeLoader
//   ]
// })
// export class TranslateTestingModule {

// }
