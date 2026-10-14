import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projectData: any = [];
  public paginatedProjectData: any = [];
  public currentPage: number = 1;
  public projectsPerPage: number = 6;
  public totalPages: number = 1;

  public constructor(public http:HttpClient){

  }
  ngOnInit(): void {

    const url: string = './assets/data.json?v=20261015'
    this.http.get(url).subscribe((response: any)=>{
      this.projectData = response;
      this.calculatePagination();
    })
  }

  calculatePagination() {
    this.totalPages = Math.ceil(this.projectData.length / this.projectsPerPage);
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    const endIndex = startIndex + this.projectsPerPage;
    this.paginatedProjectData = this.projectData.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedData();
      document.getElementById('services')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }
}
