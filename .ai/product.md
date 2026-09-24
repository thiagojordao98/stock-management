# Product Context

## Purpose

A generic inventory-management PWA for businesses that need to register products, control stock, and record sales.

## Primary workflows

1. Register a product manually or by scanning its barcode.
2. Maintain product and stock information.
3. Start a sale and scan/search products.
4. Confirm the sale and create auditable inventory movements.
5. Deduct sold quantities transactionally from available stock.

## Target segments

The core product is intentionally generic and may support pharmacies, markets, retail stores, clothing stores, and other businesses. Segment-specific capabilities should be extensions of the core domain rather than assumptions embedded in the core model.

## MVP direction

Prioritize product registration, barcode scanning, inventory control, sales, automatic stock deduction, and movement history before advanced POS, purchasing, reporting, or segment-specific features.

## Client requirements

The application is a responsive PWA targeting mobile, tablet, and desktop. Barcode scanning must work with a device camera where supported and the domain should remain compatible with external barcode readers that behave as keyboard input.
