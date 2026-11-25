import { test, describe } from 'node:test';
import assert from 'node:assert/strict';

describe('Savannah Atelier End-to-End API Integration', () => {
  const BACKEND_URL = 'http://localhost:3050/api/v1';

  test('1. Live backend health telemetry probe is reachable on port 3050', async () => {
    const res = await fetch(`${BACKEND_URL}/health`);
    assert.equal(res.status, 200);

    const json = await res.json();
    assert.equal(json.status, 'online');
    assert.equal(json.architect, 'Tryphen Emurugat');
  });

  test('2. Live portfolio projects match schema contracts', async () => {
    const res = await fetch(`${BACKEND_URL}/projects`);
    assert.equal(res.status, 200);

    const json = await res.json();
    assert.equal(json.success, true);
    assert.equal(json.count, 6);

    const perpetual = json.data.find((p: any) => p.id === 'perpetual-order-guard');
    assert.ok(perpetual);
    assert.equal(perpetual.title, 'Perpetual & Order Guard');
  });

  test('3. Live catalog services and products return complete inventory', async () => {
    const resServices = await fetch(`${BACKEND_URL}/catalog/services`);
    const services = await resServices.json();
    assert.equal(services.success, true);
    assert.equal(services.count, 9);
  });

  test('4. Live commissioning intake registers brief with unique reference ID', async () => {
    const brief = {
      clientName: 'Integration Runner',
      email: 'ci@tryphen.com',
      scope: 'Automated System Verification',
      budgetCurrency: 'USD',
      timeline: '1 Week',
      architectureNotes: 'Zero-defect automated CI pipeline check.'
    };

    const res = await fetch(`${BACKEND_URL}/inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(brief)
    });

    assert.equal(res.status, 201);
    const json = await res.json();
    assert.equal(json.success, true);
    assert.match(json.inquiryId, /^SA-INQ-/);
  });
});
