var guild = getGuild(); // Pega a guild (servidor) atual

var role = guild.getRoleById("ID da Role"); // Pega a guild pelo ID (dica: Você pode usar o comando "roleid" para ver a ID da sua role!)

if (author().hasRole(role)) { // Se o usuário já tem a role...
    author().removeRole(role); // Então vamos remover ela!
    
    reply("Role removida! 😞");
} else { // Se não...
    author().addRole(role); // Vamos adicionar a role!
    
    reply("Role adicionada! 😊");
}

// Creditos ao Arth(Pelo Codigo), MrDioogo(Por fazer o PullRequest com este comando), MrPowerGamerBR(Pela Loritta), Kaike Carlos(Por esse Repo)
