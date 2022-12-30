import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path:'about', component: AboutComponent
  },
  {
    path:'blog', component: BlogComponent
  },
  {
    path:'contact', component: ContactComponent
  },
  {
    path:'service', component: ServiceComponent
  },
  {
    path:'work', component: WorkComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
