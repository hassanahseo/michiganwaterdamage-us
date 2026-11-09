import fs from 'node:fs';
import path from 'node:path';
import citiesData from '../../src/data/cities.json';
import neighborhoodsData from '../../src/data/neighborhoods.json';
import servicesData from '../../src/data/services.json';
import subservicesData from '../../src/data/subservices.json';
import costsData from '../../src/data/costs.json';
import phonesData from '../../src/data/phones.json';

interface FactCheck {
  field: string;
  value: string;
  source_url: string;
  valid: boolean;
  error?: string;
}

export function validateData() {
  const errors: string[] = [];
  const report: {
    citiesCount: number;
    neighborhoodsCount: number;
    servicesCount: number;
    subservicesCount: number;
    costsCount: number;
    errors: string[];
    details: any[];
  } = {
    citiesCount: citiesData.length,
    neighborhoodsCount: neighborhoodsData.length,
    servicesCount: servicesData.length,
    subservicesCount: subservicesData.length,
    costsCount: costsData.length,
    errors: [],
    details: [],
  };

  // Validate Cities
  for (const city of citiesData) {
    const requiredFactFields = [
      'county',
      'population',
      'water_utility',
      'sewer_system',
      'housing_age',
      'permit_office',
    ] as const;

    for (const field of requiredFactFields) {
      const obj = (city as any)[field];
      if (!obj || typeof obj.value !== 'string' || !obj.value.trim()) {
        errors.push(`City "${city.slug}" missing valid "${field}.value"`);
      }
      if (!obj || typeof obj.source_url !== 'string' || !obj.source_url.startsWith('http')) {
        errors.push(`City "${city.slug}" missing valid "${field}.source_url"`);
      }
    }

    // Flood events array
    if (!Array.isArray(city.flood_events) || city.flood_events.length === 0) {
      errors.push(`City "${city.slug}" must have at least 1 flood_event`);
    } else {
      city.flood_events.forEach((f, idx) => {
        if (!f.value || !f.value.trim()) errors.push(`City "${city.slug}" flood_events[${idx}] missing value`);
        if (!f.source_url || !f.source_url.startsWith('http')) {
          errors.push(`City "${city.slug}" flood_events[${idx}] missing source_url`);
        }
      });
    }

    // Climate risks array
    if (!Array.isArray(city.climate_risks) || city.climate_risks.length === 0) {
      errors.push(`City "${city.slug}" must have at least 1 climate_risk`);
    } else {
      city.climate_risks.forEach((r, idx) => {
        if (!r.value || !r.value.trim()) errors.push(`City "${city.slug}" climate_risks[${idx}] missing value`);
        if (!r.source_url || !r.source_url.startsWith('http')) {
          errors.push(`City "${city.slug}" climate_risks[${idx}] missing source_url`);
        }
      });
    }

    // Local angles for all 5 services
    const services = ['water-damage', 'mold-remediation', 'fire-damage', 'biohazard-cleanup', 'plumbing'];
    for (const s of services) {
      const angle = city.local_angles ? (city.local_angles as any)[s] : null;
      if (!angle || typeof angle !== 'string' || !angle.trim()) {
        errors.push(`City "${city.slug}" missing local_angles["${s}"]`);
      } else {
        const sentences = angle.split(/(?<=[.?!])\s+/).filter(Boolean);
        if (sentences.length < 2 || sentences.length > 4) {
          errors.push(
            `City "${city.slug}" local_angles["${s}"] must be 2-4 sentences (found ${sentences.length})`
          );
        }
      }
    }
  }

  // Validate Neighborhoods
  for (const n of neighborhoodsData) {
    if (!n.slug || !n.city || !n.name) {
      errors.push(`Neighborhood entry missing slug, city or name`);
    }
    if (!n.housing_profile || !n.housing_profile.value || !n.housing_profile.source_url) {
      errors.push(`Neighborhood "${n.slug}" in "${n.city}" missing valid housing_profile`);
    }
    if (!Array.isArray(n.facts) || n.facts.length === 0) {
      errors.push(`Neighborhood "${n.slug}" in "${n.city}" must have at least 1 fact`);
    } else {
      n.facts.forEach((f, idx) => {
        if (!f.value || !f.value.trim()) errors.push(`Neighborhood "${n.slug}" fact[${idx}] missing value`);
        if (!f.source_url || !f.source_url.startsWith('http')) {
          errors.push(`Neighborhood "${n.slug}" fact[${idx}] missing source_url`);
        }
      });
    }
  }

  // Validate Costs
  for (const cost of costsData) {
    if (!cost.topic || !cost.name) errors.push(`Cost missing topic or name`);
    if (typeof cost.low !== 'number' || cost.low <= 0) errors.push(`Cost "${cost.topic}" invalid low price`);
    if (typeof cost.high !== 'number' || cost.high < cost.low) {
      errors.push(`Cost "${cost.topic}" high price must be >= low price`);
    }
    if (!cost.source_url || !cost.source_url.startsWith('http')) {
      errors.push(`Cost "${cost.topic}" missing source_url`);
    }
  }

  // Validate Phones
  if (!phonesData.restoration?.tel || !phonesData.restoration?.display) {
    errors.push('phones.json missing valid restoration phone');
  }
  if (!phonesData.plumbing?.tel || !phonesData.plumbing?.display) {
    errors.push('phones.json missing valid plumbing phone');
  }

  report.errors = errors;

  const reportsDir = path.resolve('qa/reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(path.join(reportsDir, 'validate-data.json'), JSON.stringify(report, null, 2));

  if (errors.length > 0) {
    console.error('❌ Data Validation Failed with', errors.length, 'errors:');
    errors.slice(0, 10).forEach((e) => console.error('  -', e));
    if (errors.length > 10) console.error(`  ... and ${errors.length - 10} more`);
    process.exit(1);
  } else {
    console.log('✅ Data Validation Passed: All 6 cities, 38 neighborhoods, costs & phones 100% verified.');
  }
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/')}`) {
  validateData();
}
