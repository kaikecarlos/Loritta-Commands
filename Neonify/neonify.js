var neonEmotes = {
"A" : "<a:neonA:560921563051065354>",
 
"B" : "<a:neonB:560921630813978676>",
 
"C" : "<a:neonC:560921674975936524>",
 
"D" : "<a:neonD:560921704101314580>",
 
"E" : "<a:neonE:560921732219797506>",
 
"F" : "<a:neonF:560921759818317839>",
 
"G" : "<a:neonG:560921827082502144>",
 
"H" : "<a:neonH:560921961912467466>",
 
"I" : "<a:neonI:560922032716644383>",
 
"J" : "<a:neonJ:560922087309574144>",
 
"K" : "<a:neonK:560922110529110019>",
 
"L" : "<a:neonL:560922154615701529>",
 
"M" : "<a:neonM:560922275759783987>",
 
"N" : "<a:neonN:560922332651061250>",
 
"O" : "<a:neonO:560922378767695905>",
 
"P" : "<a:neonP:560922437307596801>",
 
"Q" : "<a:neonQ:560922704564322359>",
 
"R" : "<a:neonR:560922736776577034>",
 
"S" : "<a:neonS:560922765280935961>",
 
"T" : "<a:neonT:560922823133233153>",
 
"U" : "<a:neonU:560922871313203201>",
 
"V" : "<a:neonV:560922920973762585>",
 
"W" : "<a:neonW:560922961830477878>",
 
"X" : "<a:neonX:560922995691094017>",
 
"Y" : "<a:neonY:560923072132022292>",
 
"Z" : "<a:neonZ:560923116545507355>",
}
 
function neonify (string) {
    var toNeonify = string.split("")
    var neonifyed = []
    for (var i = 0; i < toNeonify.length; i++) {
           if (neonEmotes[toNeonify[i].toUpperCase()] !== undefined) {
               neonifyed.push(neonEmotes[toNeonify[i].toUpperCase()])
           } else {
               neonifyed.push(toNeonify[i])
           }
    }
    return neonifyed.join("")
}
sendMessage(neonify(joinArguments()))
