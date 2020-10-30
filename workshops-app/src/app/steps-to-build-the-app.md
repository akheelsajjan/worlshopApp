## Lab guide step 30
1. Create a utils module

2. Create a filter component within utils module. Define 2 custom input attributes - items, filterBy and type them appropriately.

3. Export filter component from utils module

4. Import utils module in workshops module

5. Use <app-filter></app-filter> as pass the bound custom attribute-values (sessions array, filterBy array) - the bound variable filterBy = [ ... ] is defined in the session list component.

6. Implement ngOnChanges() lifecycle method and verify it gets passed when input attribute values change in the parent component, i.e in sessions list (you can force a change using setTimeout() call within ngOnInit() or something similar). The ngOnChanges takes in 1 argument - a SimpleChanges object which indicates what input attributes changed and their old and new values (and if change was the first, i.e. initial value passed in).

7. Define the UI for filtering in filter component - include forms and angular material modules in utils module. Have a filterItems() called when input value changes (ngModelChange). Define searchTerms data member in the class as well.

8. In filter component define a filterItems() function that filters items. Implement the logic for filtering. Have this called on changes from parent / input by user.

9. Define an EventEmitter object with appropriate event type (Array<Object> in our case) - use this to send data to parent - after filtering inside filterItems(), call emit() method and pass it the filtered items.

10. Accept the event object in sessions list using event binding syntax and set filtered sessions to $event (which is the event data).

## Lab guide steps 17 - 18 : Rendering a list of workshops with link to right workshop
1. Use *ngFor="let variable of array" syntax to repeat an element - the <mat-card></mat-card> representing a workshop (please refer workshops-list.component.html). We use different portion of a mat-card to show different pieces of a workshop - mat-card-header, mat-card-image (used as an attribute to img tag) etc.

2. Use [routerLink]="[ workshop.id ]" to append the right workshop id to the current URL (i.e. to /workshops URL)


## Lab guide step 13 : Preventing page refresh
1. Use routerLink directive in place of href in anchor tags.

2. If value is set from a variable, we use property binding syntax ( [property]="variable" ). Set up link text and url in array in navbar TS file and use it in the navbar template file's links.


## Lab guide steps 8 - 12 : Adding routing
1. Decide routes
router      component       who configures routing
---------------------------------------------------
/           AboutComponent  AppModule using AppRoutingModule
/workshops  WorkshopsList   WorkshopsModule using WorkshopsRoutingModule

2. Configure routes in AppRoutingModule and import AppRoutingModule in AppModule (already done when project created). For App module use .forRoot() to configure routes. Add an item with path and component properties to the routes array.

3. Create WorkshopsRoutingModule and import in WorkshopsModule. Configure routes in WorkshopsRoutingModule (using forChild). We use .forChild() to configure routes for feature modules.

4. Use <router-outlet></router-outlet> below the navbar in App root component

---

## Lab guide step 7 : Adding workshops-list

1. Create workshops module. From project folder run
ng g m workshops

2. Create workshops-list component within workshops module
ng g c workshops/workshops-list

3. Export WorkshopsList component from workshops module

4. Import WorkshopsModule in AppModule and show <app-workshops-list></app-workshops-list> in app component (app-root)

5. Include AngularMaterial module in WorkshopsModule

6. From supplied files copy all-workshops.json. Import all-workshops.json file in workshops-list.component.ts and set workshops variable to the import (.default property)

7. Display the details of first workshop, i.e. workshops[0] in workshops list template - use [innerHTML] to set workshop description

8. Please take tea break till 4:25 