#! /usr/bin/env node

const program = require('commander');

// 获取当前版本号
const version = require('./package.json').version;

const chalk = require('chalk');

// // 获取create模块
const createModel = require('./lib/create')

program
    // 配置脚手架名称
    .name('dawn-vue-cli')
    // 配置命令格式
    .usage(`<command> [option]`)
    // 配置版本号
    .version(version);

// 给提示增加
program.on('--help', () => {
    console.log();
    console.log(
        `Run ${chalk.cyan(
            'dawn-vue-cli <command> --help'
        )} for detailed usage of given command.
    `)
});

program
    .command('create <project-name>')
    .description('create a new project')
    .option('-f, --force', 'overwrite target directory if it exists')
    .action((projectName, options) => {
        // 引入create模块，并传入参数
        createModel(projectName, options);
    })

program.parse(process.argv);