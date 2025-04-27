import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import MenuHeaderComponent from './shared/components/menu-header/menu-header.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLDivElement;
  let app: AppComponent;

  @Component({
    selector: 'menu-header',
    standalone: true,
  })
  class MenuHeaderComponentMock { }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      // providers: [provideRouter([])]
    })
      .overrideComponent(AppComponent, {
        add: { imports: [MenuHeaderComponentMock] },
        remove: { imports: [MenuHeaderComponent] }
      })
      .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement;
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'pro-agl' title`, () => {
    expect(app.title).toEqual('pro-agl');
  });

  it('should render title', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('menu-header')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
