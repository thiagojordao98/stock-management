# Domain Context

## Core entities

- Product: the item managed by the business, identified by an internal ID and optionally/typically by a barcode.
- Inventory: current available quantity for a product.
- Inventory Movement: immutable business event representing a stock change.
- Sale: a confirmed commercial operation containing one or more products and quantities.

## Domain relationship

A product can have inventory and many inventory movements. A sale contains one or more sale items. Confirming a sale creates the corresponding inventory-out movements and updates available stock transactionally.

## Generalization

Do not model pharmacy, grocery, clothing, or other vertical-specific concepts in the core domain unless they are genuinely generic. Segment-specific attributes should be introduced as extensions when requirements justify them.

## Product registration

A product may be created manually or initiated through barcode scanning. Scanning identifies the barcode; product data may come from an available product data source or require user completion when no matching product is found.
