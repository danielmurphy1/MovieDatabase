import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';

const routes: Routes = [
  { path: '', component: MoviesComponent }, 
  { path: 'history', component: SearchHistoryComponent},
  { path: '**', component: MoviesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    SearchMoviesComponent,
    SearchResultsComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
