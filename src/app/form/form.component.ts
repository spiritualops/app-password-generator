import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {

  public charsIn: number;
  numsIn: number;
  symsIn: number;
  public pwsIn: number;

  passwords: Array<string>;

  constructor() {
  }

  ngOnInit() {
    this.charsIn = 0;
    this.numsIn = 0;
    this.symsIn = 0;
    this.pwsIn = 0;
  }

  ngOnDestroy() {
    // TODO
  }

  private onSubmit() {
    console.log(this.pwsIn);
    this.createPasswords(this.charsIn, this.numsIn, this.symsIn, this.pwsIn);
  }

  private shuffle(characters: string, numbers: string, symbols: string): string {
    const shuffledPassword = characters + numbers + symbols;
    let splitPassword = shuffledPassword.split('');

    for (let i = 0; i < splitPassword.length - 1 ; i++) {
      console.log(splitPassword.length);
      const pseudoIndex = Math.floor(Math.random() * (splitPassword.length - 1));
      splitPassword = this.swap(pseudoIndex, i, splitPassword);
    }

    return splitPassword.join('');
  }

  private swap(to: number, from: number, arr: Array<string>): Array<string> {
    const tmp = arr[to];
    arr[to] = arr[from];
    arr[from] = tmp;
    return arr;
  }

  private createCharacters(chars: number): string {
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

    console.log(pseudoCharacters);
    return pseudoCharacters.join('');
  }

  private createNumbers(nums: number): string {
    // 48 - 57
    const pseudoNumbers = [];

    while (nums > 0) {
      const pseudoNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      pseudoNumbers.push(pseudoNumber);
      nums--;
    }

    console.log(pseudoNumbers);
    return pseudoNumbers.join('');
  }

  private createSymbols(syms: number): string {
    // 33 - 47
    const pseudoSymbols = [];

    while (syms > 0) {
      const pseudoSymbol = String.fromCharCode(Math.floor(Math.random() * 15) + 33);
      pseudoSymbols.push(pseudoSymbol);
      syms--;
    }

    console.log(pseudoSymbols);
    return pseudoSymbols.join('');
  }

  private createPasswords(pws: number, chars: number, nums: number, syms: number): Array<string> {
    const passwords = [];

    while (pws > 0) {
      const characters = this.createCharacters(chars);
      console.log(characters);
      const numbers = this.createNumbers(nums);
      const symbols = this.createSymbols(syms);
      passwords.push(this.shuffle(characters, numbers, symbols));
      pws--;
    }

    console.log(passwords);
    this.passwords = passwords;
    return passwords;
  }

}
