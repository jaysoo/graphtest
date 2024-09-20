import "@acme/ui";
import '@acme/db';
import '@acme/util';
import { a } from '@acme/a';
import { b } from '@acme/b';
import { c } from '@acme/c';
import { d } from '@acme/d';
import { e } from '@acme/e';
import { f } from '@acme/f';

import NxWelcome from './nx-welcome';

console.log(a());
console.log(b());
console.log(c());
console.log(d());
console.log(e());
console.log(f());

export function App() {
  return (
    <div>
      <NxWelcome title="demo" />
    </div>
  );
}

export default App;
