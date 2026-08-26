# BauKostenRadar.de

German renovation and trades pricing portal for homeowners, property buyers and renovators.

## Product direction

BauKostenRadar combines:
- current renovation and trade price guides
- calculators for renovation budgets
- regional price factors
- cost breakdowns for labor, materials and reserves
- future lead generation for local contractors

## WordPress structure

- `wp-content/themes/baukostenradar-child/` - GeneratePress child theme
- `wp-content/plugins/baukostenradar-core/` - calculators and project functionality
- `.github/workflows/` - deployment automation

## Initial SEO clusters

- Badsanierung Kosten
- Renovierung Kosten
- Haus renovieren Kosten
- Wohnung renovieren Kosten
- Maler Kosten
- Fliesenleger Kosten
- Elektriker Kosten
- Dachsanierung Kosten
- Bodenleger Kosten
- Handwerker Kosten

## Development workflow

All project changes are maintained through GitHub. Production deployment will be automated with GitHub Actions once hosting credentials and the final server target path are configured as repository secrets.
