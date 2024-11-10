import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as process from 'node:process';

export default () => {
  const config = yaml.load(
    readFileSync(
      join(__dirname, `${process.env.NODE_ENV ?? 'development'}.yaml`),
      'utf8'
    )
  ) as Record<string, any>;
  process.env.DATABASE_URL = `file:${config.db.sqlite.database}`;
  return config;
};
