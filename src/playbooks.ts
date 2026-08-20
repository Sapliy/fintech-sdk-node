export type PlaybookType = 'revenue-recovery' | 'refund-approval' | 'invoice-reminders';

export interface PlaybookCatalog {
  type: PlaybookType;
  description: string;
}

export interface PlaybookBootstrap {
  type: PlaybookType;
  description: string;
  config: Record<string, never>;
}

export const playbookCatalog: Record<PlaybookType, PlaybookCatalog> = {
  'revenue-recovery': {
    type: 'revenue-recovery',
    description: 'Recover failed subscription payments with automated dunning and smart retries',
  },
  'refund-approval': {
    type: 'refund-approval',
    description: 'Route refunds and invoice adjustments through the policy engine for approval',
  },
  'invoice-reminders': {
    type: 'invoice-reminders',
    description: 'Send automated reminders for overdue invoices',
  },
};

export class Playbooks {
  /**
   * List the MVP operational playbooks.
   */
  public list(): PlaybookCatalog[] {
    return Object.values(playbookCatalog);
  }

  /**
   * Return a scaffold configuration for a playbook kind.
   */
  public bootstrap(kind: string): PlaybookBootstrap {
    const entry = playbookCatalog[kind as PlaybookType];
    if (!entry) {
      throw new Error(`playbook "${kind}" not found`);
    }
    return {
      type: entry.type,
      description: entry.description,
      config: {},
    };
  }
}