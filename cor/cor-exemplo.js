// ---- [Configurações] ----
var colorCommand = {
    roleId: "364201981016801281" // Id da role que poderá usar o comando de cor, deixe em branco caso qualquer um possa usar
};

var colorCommandMessages =  {
    missingPermission: "Este comando é apenas para doadores, se você quer me ajudar a comprar um 🍮, então vire um doador! https://loritta.website/donate", // Mensagem que será enviada quando o usuário não tiver a role para usar o comando (deixar em branco caso não exista role específica para usar o comando)   
    mentionUser: true, // Mencionar o usuário que executou o comando, deixe "false" para NÃO mencionar e "true" para mencionar
    alreadyUsedIndicator: true, // Adiciona um 🔵 ou 🔴 na frente de todas as cores quando o usuário executa o comando com um "list" na frente. Serve para indicar se o usuário está ou não usando aquela cor.   
    commandEmoji: "🎨", // Emoji que vem antes do comando ("😄 | ..."). O emoji precisa estar em unicode, ex: "commandEmoji: "😔".
    cargoAdicionado: "Cor adicionada!", // Mensagem enviada quando o cargo da cor é ADICIONADO ao usuário
    cargoRemovido: "Cor removida!" // Mensagem enviada quando o cargo da cor é REMOVIDO do usuário
};

var cores = []; // Array das cores, não mexa nisso

function addColor(colorName, role) { // Função para adicionar as cores, também não mexa nisso
    cores.push({
        cor: colorName.toLowerCase(),
        roleId: role
    });
}

addcolor("dourado", "373539973984550912");
addcolor("azul claro", "373539846620315648");
addcolor("azul escuro", "373539894259351553");
addcolor("amarelo", "373539918863007745");
addcolor("vermelho", "373540030053875713");
addcolor("vermelho escuro", "373540076095012874");
addcolor("verde claro", "374613592185634816");
addcolor("verde escuro", "374613624536170500");
addcolor("rosa claro", "374613958608551936");
addcolor("rosa escuro", "374614002707333120");
addcolor("rosa choque", "411235044842012674");

/**
 * NÃO ALTERE NADA ABAIXO
 * 
 * ---- [COMANDO] ----
 * 
 * NÃO ALTERE NADA ABAIXO
*/
function fancyReply(message) {
    (colorCommandMessages.mentionUser) ? 
    sendMessage((colorCommandMessages.commandEmoji.length > 0) ? `${colorCommandMessages.commandEmoji} **|** ${author().getAsMention()} ${message}` : `${author().getAsMention()} ${message}`)
    :
    sendMessage((colorCommandMessages.commandEmoji.length > 0) ? `${colorCommandMessages.commandEmoji} **|** ${message}` : `${message}`);
}

var guild = getGuild(); // Pega a guild/servidor em que o comando foi executado
var getRole = (colorCommand.roleId.length >= 18) ? guild.getRoleById(colorCommand.roleId) : 0; // Pega a role pelo ID (você pode ver o ID da role usando "roleid @role" na Loritta)

if (getRole !== 0 && !author().hasRole(getRole)) {
    fancyReply(colorCommandMessages.missingPermission);
    return;
}

var colorSelection = joinArguments().toLowerCase();

function showColors() {
    var colorsName = '';
    var role; 
    cores.forEach(a => {
        role = guild.getRoleById(a.roleId);
        colorsName += `${(colorCommandMessages.alreadyUsedIndicator) ? (author().hasRole(role)) ? '🔵 ' : '🔴 ' : ''}${a.cor}, `;
    });
    
    colorsName = colorsName.replace(/,\s*$/, "");
    
    return colorsName;
}

if (colorSelection === 'list' || colorSelection.length === 0) {
    fancyReply(`Cores disponíves: \n\`${showColors()}\`.`);
} else {
    var idx = cores.findIndex(a => a.cor === colorSelection);
    var selectedRole;
    
    if (idx === -1) { 
        fancyReply(`**${colorSelection}** não é uma cor válida! Lista de cores: \n\`${showColors()}\`.`);
        return;
    } else {
        selectedRole = guild.getRoleById(cores[idx].roleId);   
    }
    
    (author().hasRole(selectedRole)) ? (author().removeRole(selectedRole), fancyReply(colorCommandMessages.cargoRemovido)) : (author().addRole(selectedRole), fancyReply(colorCommandMessages.cargoAdicionado));
}

