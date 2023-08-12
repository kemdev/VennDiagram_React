/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@components'] = './src/components';
    config.resolve.alias['@pages'] = './src/pages';
    config.resolve.alias['@styles'] = './src/styles';
    config.resolve.alias['@utils'] = './src/utils';
    config.resolve.alias['@hooks'] = './src/hooks';
    config.resolve.alias['@context'] = './src/context';
    config.resolve.alias['@public'] = './public';
    config.resolve.alias['@api'] = './src/api';
    config.resolve.alias['@constants'] = './src/constants';
    config.resolve.alias['@types'] = './src/types';
    config.resolve.alias['@services'] = './src/services';
    config.resolve.alias['@config'] = './src/config';
    config.resolve.alias['@assets'] = './src/assets';
    return config;
  },
};

module.exports = nextConfig;
