module.exports = {
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      // Si vous aviez du code dans onBeforeSetupMiddleware, le mettre ici
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Si vous aviez du code dans onAfterSetupMiddleware, le mettre ici

      return middlewares;
    }
  }
}
