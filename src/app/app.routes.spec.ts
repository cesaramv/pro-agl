import { Location } from "@angular/common";
import { TestBed } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";
import { routes } from "./app.routes";
import { inject } from "@angular/core";

describe('AppRoutes', () => {

    let router: Router;
    let location: Location;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideRouter(routes)]
        });
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
    })

    it('Should navigar to "forms" redirect to "/forms"', async () => {
        await router.navigate(['forms']);
        expect(location.path()).toBe('/forms');
    });

    it('should navigate to "pokemons/page/1" redirects to "/pokemons/page/1" ', async () => {
        await router.navigate(['pokemons/page/1']);

        expect(location.path()).toBe('/pokemons/page/1');
    });

    it('should navigate to "pokemons/page/1" redirects to "/pokemons/page/1" ', async () => {
        await router.navigate(['unknown-page']);

        // console.log(location.path());

        expect(location.path()).toBe('/about');
    });

    it('should load the proper component', async () => {
        const aboutRoute = routes.find((route) => route.path === 'about')!;
        expect(aboutRoute).toBeDefined();
        const aboutComponent = (await aboutRoute.loadComponent!()) as any;
        expect(aboutComponent.name).toBe('AboutComponent');

        const pokemonPageRoute = routes.find(
            (route) => route.path === 'pokemons/page/:page'
        )!;
        expect(pokemonPageRoute).toBeDefined();
        const pokemonPage = (await pokemonPageRoute.loadComponent!()) as any;
        expect(pokemonPage.default.name).toBe('PokemonsComponent');
    });
})