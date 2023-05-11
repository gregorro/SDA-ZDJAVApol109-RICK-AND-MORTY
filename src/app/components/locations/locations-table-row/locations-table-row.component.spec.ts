import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTableRowComponent } from './locations-table-row.component';

describe('LocationsTableRowComponent', () => {
  let component: LocationsTableRowComponent;
  let fixture: ComponentFixture<LocationsTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationsTableRowComponent]
    });
    fixture = TestBed.createComponent(LocationsTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
