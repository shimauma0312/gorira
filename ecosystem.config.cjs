module.exports = {
  apps: [
    {
      name: 'B',
      exec_mode: 'fork',
      instances: '1', // Or a number of instances
      script: './.output/server/index.mjs',
      args: 'preview',
      env: {
 	NITRO_HOST: '0.0.0.0',
        NITRO_PORT: 3001,
      },
    }
  ]
}

