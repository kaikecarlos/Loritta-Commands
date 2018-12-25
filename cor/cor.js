var colorToId = {
    "amarelo": "300629752170151937",
    "verde claro": "300629390746845184",
    "verde escuro": "342038211075375124",
    "vermelho claro": "300629673510174720",
    "vermelho escuro": "342038003801260032",
    "rosa": "300629867115053066",
    "preto": "300630034408931329",
    "cinza claro": "300630125987233802",
    "cinza escuro": "342038682947026955",
    "roxo": "300629820268609538",
    "branco": "300629979857944576",
    "laranja": "319586866208964608",
    "azul claro": "299950708235698177",
    "azul escuro": "342037881298092032",
    "ouro": "342707528343224321",
    "prata": "342707616390316033",
    "bronze": "342707984981557260"
};

var coresComVariante = ["verde", "vermelho", "cinza", "azul"];
var coresExclusivas = ["ouro", "prata", "bronze"];

if(getArgument(0) !== null) {
var cor = joinArguments().toLowerCase();

if(cor == "lista") {
    reply("**Cores disponíveis: ** " + Object.keys(colorToId).join(", "));
} else {
if (cor in colorToId) {
    var roleId = colorToId[cor];
    if(coresExclusivas.indexOf(cor) > -1) {
            var role = getGuild().getRoleById(roleId);
    
    if (author().hasRole(role)) {
        author().removeRole(role);
        reply("Você removeu a cor `" + cor + "`!");
    } else {
        author().addRole(role);
        reply("Você recebeu a cor `" + cor + "`!");
    }
        } else {
            reply("O cargo `" + cor + "` é exclusivo para MODERADORES.");
        }
    } else {
    var role = getGuild().getRoleById(roleId);
    
    if (author().hasRole(role)) {
        author().removeRole(role);
        reply("Você removeu a cor `" + cor + "`!");
    } else {
        author().addRole(role);
        reply("Você recebeu a cor `" + cor + "`!");
    }
}}} else {
    if(coresComVariante.indexOf(cor) > -1) {
        reply("`" + cor + "` contém variantes. Por favor, escolha apenas `" + cor + " escuro` ou `" + cor + " claro`.");
    } else {
    reply("Essa cor não existe.");
}}}} else {
    reply("Digite a cor desejada após `+cor`, ou adicione `lista` para ver a lista de cores: `+cor amarelo`, `+cor lista`\n\nSe você quiser remover uma cor, execute o comando como se você fosse COLOCÁ-LA, mas ela será retirada.\nSe for TROCAR uma cor, terá que remover a antiga antes.");
}
// Creditos à SMIX(Pelo Codigo), MrPowerGamerBR(Pela Loritta), Kaike Carlos(Por esse Repo)
