import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AccesoriosComponent } from './accesorios/accesorios';
import { TuberiasComponent } from './tuberias/tuberias';
import { CablesElectricosComponent } from './cables/cables';
import { IluminacionComponent } from './iluminacion/iluminacion';
import { PinturasComponent } from './pinturas/pinturas'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'tuberias', component: TuberiasComponent },
  { path: 'cables-electricos', component: CablesElectricosComponent },
  { path: 'pinturas', component: PinturasComponent},
  { path: 'iluminacion', component: IluminacionComponent },
  { path: '**', redirectTo: '' }
];