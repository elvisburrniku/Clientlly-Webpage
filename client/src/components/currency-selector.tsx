import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const currencies = {
  USD: { symbol: '$', name: 'US Dollar', rate: 1.0 },
  EUR: { symbol: '€', name: 'Euro', rate: 0.85 },
  GBP: { symbol: '£', name: 'British Pound', rate: 0.73 },
  CAD: { symbol: 'C$', name: 'Canadian Dollar', rate: 1.25 },
  AUD: { symbol: 'A$', name: 'Australian Dollar', rate: 1.35 },
  JPY: { symbol: '¥', name: 'Japanese Yen', rate: 110.0 },
  CHF: { symbol: 'CHF', name: 'Swiss Franc', rate: 0.92 },
  SEK: { symbol: 'kr', name: 'Swedish Krona', rate: 8.5 },
  NOK: { symbol: 'kr', name: 'Norwegian Krone', rate: 8.8 },
  DKK: { symbol: 'kr', name: 'Danish Krone', rate: 6.3 },
};

interface CurrencySelectorProps {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
  className?: string;
}

export function CurrencySelector({ selectedCurrency, onCurrencyChange, className }: CurrencySelectorProps) {
  return (
    <Select value={selectedCurrency} onValueChange={onCurrencyChange}>
      <SelectTrigger className={`w-[140px] ${className}`}>
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(currencies).map(([code, currency]) => (
          <SelectItem key={code} value={code}>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{currency.symbol}</span>
              <span>{code}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function convertPrice(price: number, fromCurrency: string, toCurrency: string): number {
  if (fromCurrency === toCurrency) return price;
  
  const fromRate = currencies[fromCurrency as keyof typeof currencies]?.rate || 1;
  const toRate = currencies[toCurrency as keyof typeof currencies]?.rate || 1;
  
  // Convert to USD first, then to target currency
  const usdPrice = price / fromRate;
  return Math.round((usdPrice * toRate) * 100) / 100;
}

export function formatCurrency(amount: number, currencyCode: string): string {
  const currency = currencies[currencyCode as keyof typeof currencies];
  if (!currency) return `$${amount}`;
  
  // Special formatting for JPY (no decimals)
  if (currencyCode === 'JPY') {
    return `${currency.symbol}${Math.round(amount)}`;
  }
  
  return `${currency.symbol}${amount.toFixed(2)}`;
}