import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RightCarouselComponent } from "./movies/right-carousel/right-carousel.component";
import { Headers1Component } from "./movies/headers1/headers1.component";

const appRoutes: Routes = [
  // {
  //   path: "/carousel",
  //   component: RightCarouselComponent,
  // },
  // {
  //   path: "/carousel",
  //   component: RightCarouselComponent,
  // },
];
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
