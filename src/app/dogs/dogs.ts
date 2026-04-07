import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { DogsService } from './dog.service';
import { Subject, takeUntil } from 'rxjs';
import { Dog } from './dogs.modal';
import { DogAgePipe } from './dog-age-pipe';
import { DogWeightPipe } from './dog-weight-pipe';

@Component({
  selector: 'app-dogs',
  imports: [DogAgePipe, DogWeightPipe],
  templateUrl: './dogs.html',
  styleUrl: './dogs.scss',
})
export class Dogs implements OnInit, OnDestroy {
  dogService = inject(DogsService);
  cdRef = inject(ChangeDetectorRef);
  dogs: Dog[] = [];
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.dogService
      .getDogs()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: any) => {
          this.dogs = data?.data;
          this.cdRef.markForCheck();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
