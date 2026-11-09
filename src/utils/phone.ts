import phonesData from '../data/phones.json';

export type Vertical = 'restoration' | 'plumbing';

export function getPhone(verticalOrService?: string) {
  if (verticalOrService === 'plumbing') {
    return phonesData.plumbing;
  }
  return phonesData.restoration;
}
