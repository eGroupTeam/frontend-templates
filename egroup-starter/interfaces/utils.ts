export interface EntityList<T> {
  total: number;
  source: T[];
}

export interface UrlParams {
  serviceProductId?: string;
  orderId?: string;
}

export type RootState = {
  dialogs: Record<string, unknown>;
  snackbars: Record<string, unknown>;
  publicPages: {
    basic: {
      counts: number;
    };
  };
};
