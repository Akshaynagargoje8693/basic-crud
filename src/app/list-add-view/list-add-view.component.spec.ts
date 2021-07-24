import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddViewComponent } from './list-add-view.component';

describe('ListAddViewComponent', () => {
  let component: ListAddViewComponent;
  let fixture: ComponentFixture<ListAddViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
