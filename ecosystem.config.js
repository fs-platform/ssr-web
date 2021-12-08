module.exports = {
  apps: [{
    name: 'blog',
    script: './node_modules/nuxt/bin/nuxt.js',
    cwd: './',
    exec_mode: "cluster",
    out_file: "/data/logs/nuxt/out-0.log",
    error_file: "/data/logs/nuxt/out-0.log",
    merge_logs: true,
    log_data_format: 'YYYY-MM-DD HH:mm Z',
    autorestart: true,
    max_memory_restart: '1G',
    args: 'start',
    watch:false,
    env: {
      PORT: 3000,
      NODE_ENV: "production"
    },
    instances: 2
  }],
};
