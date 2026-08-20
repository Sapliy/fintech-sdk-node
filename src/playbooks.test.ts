import { test } from 'node:test';
import assert from 'node:assert';
import { playbookCatalog, Playbooks } from './playbooks';

const MVP_TYPES = ['revenue-recovery', 'refund-approval', 'invoice-reminders'];

test('playbookCatalog contains the 3 MVP playbooks', () => {
  assert.deepStrictEqual(Object.keys(playbookCatalog), MVP_TYPES);
  for (const type of MVP_TYPES) {
    const entry = playbookCatalog[type as keyof typeof playbookCatalog];
    assert.ok(entry.type === type, `expected type ${type}`);
    assert.ok(entry.description.length > 0, `expected description for ${type}`);
  }
});

test('Playbooks.list returns the 3 MVP playbooks', () => {
  const playbooks = new Playbooks();
  const list = playbooks.list();
  assert.strictEqual(list.length, 3);
  assert.deepStrictEqual(
    list.map((p) => p.type),
    MVP_TYPES,
  );
});

test('Playbooks.bootstrap returns a scaffold config', () => {
  const playbooks = new Playbooks();
  const cfg = playbooks.bootstrap('revenue-recovery');
  assert.strictEqual(cfg.type, 'revenue-recovery');
  assert.ok(cfg.description.length > 0);
  assert.deepStrictEqual(cfg.config, {});
});

test('Playbooks.bootstrap throws for unknown kind', () => {
  const playbooks = new Playbooks();
  assert.throws(() => playbooks.bootstrap('nope'), /not found/);
});