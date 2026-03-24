import { bar } from './b';

export function foo() {
    console.log('foo');
}

export function foobar() {
    foo();
    bar();
}