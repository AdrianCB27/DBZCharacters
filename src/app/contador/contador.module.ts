import { NgModule } from "@angular/core";
import { Contador } from "./components/app.component";
@NgModule({
    declarations:[
        Contador
    ],
    exports:[
        Contador
    ]
})
export class ContadorModule{

}