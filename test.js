const tone = require('.')
const call = require('@drumwork/call')

// text('byu^dy')
// text('diU--U-m')
// text('ky~O!n')
// text('ny~O-O+')
// text('uu--u-y')
// text('e-Qi-Qo$-')
// text('a-a+fa+')
// text('a-a-kpo$&-')
// text('a-a+ri&+')
// text('aa+si-ki+')
// text('a+a+si-kiri-imu-')
// text('aa+xa+a-ita-')
// text('a-a-wE-')
// text('a-a-yo-')
// text('Omo$&lE-')
// text('ya-u+ya-u+u-')
// text('ka@ga@sh~Uqdjy~a@')
// text('ka@_ga@hha@da@')
// text('ka@ga@VoVo')
// text('sa!a--a-w')
// text("sO-!O--p'!")
// text('oia')
// text('oyawi')
// text('blartxUnnak')
// text('sOfIstUkeytId')
// text('suprkAlUfrAdjUlIstIkEkspiAlOdoxOs')
// text('spri^qkl')

// ipa('diəm˧˩˨')
// ipa('cɤ̆n˧˧')
// ipa('ɲɤ˨˦')
// ipa('uj˧˩˨')
// ipa('è.ɣì.ɣɔ̀')
// ipa('àá.fá')
// ipa('àà.k͡pɔ̃̀') // ?
// ipa('àá.ɾĩ́')
// ipa('āá.sì.kí')
// ipa('áásìkiriìmù')
// ipa('āá.ʃáà.ī.tà')
// ipa('àà.wɛ̀')
// ipa('àà.jò')
// ipa('ʊ̄.mɔ̃̄.lɛ̀')
// ipa('jà.ú.jà.úù')
// ipa('ka̠ɡa̠sʰʌ̹ŋd͡ʑa̠')
// ipa('ˈka̠ːɡa̠ɦa̠da̠')
// ipa('ka̠ɡa̠βo̞βo̞')
// ipa('săw˧˩˨')
// ipa('sɤ̆p˨ˀ˩')
// ipa('ʔɗəwk͡p̚˧˨ʔ')
// ipa('ɑb̥eˈd̥isə')
// ipa('t͡ɕɘ(ː)ŋo̞')
// ipa('t͡ɕʌ̹t̚k͈a̠ɾa̠k̚t͡ɕ͈iɭ')
// ipa('t͡ɕʌ̹pɕ͈i')
// ipa('ˈt͡ɕɘ(ː)mpʰo̞')
// ipa('t͡ɕʌ̹ŋɕʰinɰiɦa̠k̚')
// ipa('t͡ɕʌ̹ŋsʰa̠ŋβwe̞da̠m')
// ipa('ip̚p͈ʌ̹p̚t͡ɕ͈a̠')
// ipa('(ʔ)evoˈlut͡sja')
// ipa('adʁiˈχal')
ipa('k͈o̞ms͈o̞mo̞ɭsʰɯkxɯ-na̠-a̠muɾe̞')
ipa('ɸʷo̞')
ipa('kxɯnsʰo̞ɾit͡ɕʰida̠')
ipa('kxɯʎʎikʰa̠da̠')

function text(a) {
  const syllables = tone.syllable(a)
  console.log('text => ' + a)
  console.log('  font => ' + tone(a))
  console.log('  mark => ' + syllables.count)
  console.log('  free => ' + syllables.free)
}

function ipa(a) {
  const pron = tone.pronunciation(a)
  console.log('ipa => ' + a)
  console.log('  text => ' + pron)
  console.log('  call => ' + call(pron))
  console.log('  font => ' + tone(pron))
  const syllables = tone.syllable(pron)
  console.log('  mark => ' + syllables.count)
  console.log('  free => ' + syllables.free)
}
