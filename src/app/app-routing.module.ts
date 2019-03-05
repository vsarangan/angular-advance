import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VirtualKeypadComponent } from './virtual-keypad/virtual-keypad.component';
import { ViewContainerRefDemoComponent } from './view-container-ref-demo/view-container-ref-demo.component';
import { CdkOverlayComponent } from './cdk-overlay/cdk-overlay.component';
import { ControlvalueaccessorComponent } from './controlvalueaccessor/controlvalueaccessor.component';
import { StruturalDirectiveComponent } from './strutural-directive/strutural-directive.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cards' },
  { path: 'virtualKeypad', component: VirtualKeypadComponent },
  { path: 'viewContainerReference', component: ViewContainerRefDemoComponent },
  { path: 'onPushStrategy', component: VirtualKeypadComponent },
  { path: 'cdkOverlay', component: CdkOverlayComponent },
  { path: 'virtualKeypad', component: VirtualKeypadComponent },
  { path: 'controlValueAccessor', component: ControlvalueaccessorComponent },
  { path: 'structuralDirective', component: StruturalDirectiveComponent },
  { path: 'cards', component: CardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
