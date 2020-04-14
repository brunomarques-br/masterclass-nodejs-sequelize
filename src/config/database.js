/**
 * Basicamente vai exportar um objeto de configuração do banco de dados. 
 * timestamps = true, vamos deixar configurado porque em toda tabela terá 'updated_at, created_at'
 * underscored = true, vamos deixar configurado a nomenclatura de todas tabelas no formato snake case, separados por underline.
 */
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'changeme',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: true
    },
};