import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as process from 'node:process';

export default () => {
  const path =
    process.env.NODE_ENV === 'development'
      ? 'development.yaml'
      : `app/config/${process.env.NODE_ENV}.yaml`;
  const config = yaml.load(
    readFileSync(join(__dirname, path), 'utf8')
  ) as Record<string, any>;
  process.env.DATABASE_URL = `file:${config.db.sqlite.database}`;
  return config;
};
