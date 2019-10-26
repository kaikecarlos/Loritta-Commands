// USE NEW API
var role = guild.getRoleById("ID_do_cargo") //Coloque aqui o ID da role que vai poder usar o comando! Dica: use +roleinfo <Nome_do_cargo> para pegar o ID dele.

if (!author.hasRole(role)) {
    channel.send("Você não vai usar o meu super comandinho de banir as pessoas com motivos bonitinhos ;w;").queue()
    return
}

var user = context.getUserAt(0)

if (user === null) {
    channel.send("Cadê a menção fera? ;)").queue()
    return
}

var reason = context.rawArgs[1].toLowerCase()

var punishmentReasons = {
    "spam": "Floodar/spammar (Enviar várias mensagens repetidas, enviar uma mensagem com caracteres aletórios, adicionar reações aleatórias, etc) nos canais de texto.",
    "div": "Não é permitido divulgar conteúdos em canais de texto sem que a equipe permita.",
    "divdm": "Enviar conteúdo (não solicitado!) via mensagem direta, fazer spam (ou seja, mandar conteúdo indesejado para outras pessoas) é contra as regras do servidor da Loritta e dos termos de uso do Discord e, caso continuar, você poderá ser suspenso do Discord e irá perder a sua conta!",
    "nsfw": "É proibido compartilhar conteúdo NSFW (coisas obscenas como pornografia, gore e coisas relacionadas), conteúdo sugestivo, jumpscares, conteúdo de ódio, racismo, assédio, links com conteúdo ilegal e links falsos. Será punido até se passar via mensagem direta, até mesmo se a outra pessoa pedir.",
    "toxic": "Ser tóxico (irritar e desrespeitar) com outros membros do servidor. Aprenda a respeitar e conviver com outras pessoas!",
    "mp": "Mencionar vários usuários ao mesmo tempo. (Spam/MassPing)",
    "tos": "Violar os termos de uso do Discord. (https://discordapp.com/terms)",
    "eb": "Evasão de ban. (Criar contas falsas para entrar no servidor após ser banido)",
}

var fancyReason = punishmentReasons[reason]

if (fancyReason === undefined) {
    channel.send("Cadê o motivo fera? ;)").queue()
    return
}

channel.send(`Punindo ${user} por \`${fancyReason}\`...`).queue()

var proof = context.rawArgs[2]

if (proof !== undefined) {
    fancyReason = "[" + fancyReason + "](" + proof + ")"
}

guild.ban(
    user,
    author,
    { "days": 7, "reason": fancyReason }
)
