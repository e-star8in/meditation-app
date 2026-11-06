import IconAnxious from '@/icons/IconAnxious.vue';
import IconFocus from '@/icons/IconFocus.vue';
import IconCalm from '@/icons/IconCalm.vue';
import IconRelax from '@/icons/IconRelax.vue';
import type { Component } from 'vue';

export interface Feeling {
  type: 'feeling_calm' | 'feeling_relax' | 'feeling_focus' | 'feeling_anxiety';
  value: number;
}

export type FeelingKey = 'feeling_calm' | 'feeling_relax' | 'feeling_focus' | 'feeling_anxiety';

export interface FeelingConfig {
  label: FeelingKey;
  back_key: string;
  translate: string;
  description: string;
  icon: Component;
  primary: string;
  secondary: string;
}

export const FEELINGS: Record<FeelingKey, FeelingConfig> = {
  feeling_calm: {
    label: 'feeling_calm',
    back_key: 'total_calm',
    translate: 'Спокойно',
    description: 'Спокойных дней',
    icon: IconCalm,
    primary: '#69B069',
    secondary: '#2B5B33',
  },
  feeling_relax: {
    label: 'feeling_relax',
    back_key: 'total_relax',
    translate: 'Расслабленно',
    description: 'Расслабленных дней',
    icon: IconRelax,
    primary: '#69A1B0',
    secondary: '#2B505B ',
  },
  feeling_focus: {
    label: 'feeling_focus',
    back_key: 'total_focus',
    translate: 'Сфокусированно',
    description: 'Фокусированных дней',
    icon: IconFocus,
    primary: '#9CB069',
    secondary: '#595B2B',
  },
  feeling_anxiety: {
    label: 'feeling_anxiety',
    back_key: 'total_anxiety',
    translate: 'Тревожно',
    description: 'Тревожных дней',
    icon: IconAnxious,
    primary: '#B0696A',
    secondary: '#5B2B2C',
  },
};
