import { Component, inject } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonBallService } from "../../services/dragonball.service";

@Component({
  templateUrl: './dragon-ball-super-page.html',
  selector: 'dragonball-super',
  // imports: [NgClass]
  imports: [CharacterListComponent, CharacterAddComponent]
})
export class DragonBallSuperPageComponent {
  public dragonBallService = inject(DragonBallService);

}
