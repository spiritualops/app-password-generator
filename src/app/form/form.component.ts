import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  readonly charsIn: number;
  readonly numsIn: number;
  readonly symsIn: number;
  readonly pwsIn: number;

  constructor() {
  }

  ngOnInit() {
    // TODO
  }

  ngOnDestroy() {
    // TODO
  }

  private onSubmit() {
    this.generateSequence(this.charsIn, this.numsIn, this.symsIn, this.pwsIn);
  }

  private shuffle(characterSequence: string, numberSequence: string, symbolSequence: string): string {
    const sequence = characterSequence + numberSequence + symbolSequence;

    while (sequence.length > 0) {
      // TODO
    }

    return '';
  }

  private swap() {
    // todo
  }

  private generateSequence(chars: number, nums: number, syms: number, pws: number): void {
    this.createPasswordSequence(pws, chars, nums, syms);
  }

  private createCharacterSequence(chars: number): string {
    // 65 - 90
    const pseudoCharacters = [];

    while (chars > 0) {
      const flipBit = Math.round(Math.random());
      const pseudoCharacter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

      if (flipBit === 1) {
        pseudoCharacters.push(pseudoCharacter);
      } else {
        pseudoCharacters.push(pseudoCharacter.toLowerCase());
      }

      chars--;
    }

    return pseudoCharacters.join('');
  }

  private createNumberSequence(nums: number): string {
    // 48 - 57
    const pseudoNumbers = [];

    while (nums > 0) {
      const pseudoNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      pseudoNumbers.push(pseudoNumber);
      nums--;
    }

    return pseudoNumbers.join('');
  }

  private createSymbolSequence(syms: number): string {
    // 33 - 47
    const pseudoSymbols = [];

    while (syms > 0) {
      const pseudoSymbol = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
      pseudoSymbols.push(pseudoSymbol);
    }

    return pseudoSymbols.join('');
  }

  private createPasswordSequence(pws: number, chars: number, nums: number, syms: number): Array<string> {
    const passwords = [];

    while (pws > 0) {
      const characterSequence = this.createCharacterSequence(chars);
      const numberSequence = this.createNumberSequence(nums);
      const symbolSequence = this.createSymbolSequence(syms);
      passwords.push(this.shuffle(characterSequence, numberSequence, symbolSequence));
      pws--;
    }

    return passwords;
  }

}
