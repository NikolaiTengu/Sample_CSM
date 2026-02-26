# Client Satisfaction Measurement Dashboard

A comprehensive dashboard for tracking client satisfaction metrics for the Administrative Department's Service Compliance Program (SCP) built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Real-time Metrics**: View overall satisfaction scores, response rates, and key performance indicators
- **Detailed Rating Breakdown**: Track performance across multiple dimensions:
  - Timeliness
  - Quality
  - Professionalism
  - Communication
- **Trend Analysis**: Visualize satisfaction trends over time with interactive charts
- **Service Type Analysis**: Compare performance across different service categories
- **Recent Feedback**: Review client feedback and detailed ratings

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the dashboard.

## Project Structure

```
Sample_CSM/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Dashboard.tsx        # Main dashboard component
│   │   ├── MetricCard.tsx       # Metric display cards
│   │   ├── SatisfactionChart.tsx # Line chart for trends
│   │   ├── ServiceBreakdown.tsx  # Bar chart for services
│   │   └── RecentFeedback.tsx    # Feedback list
│   └── data/
│       └── csmData.ts           # Sample survey data
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Dashboard Sections

### 1. Key Metrics
- Overall Satisfaction Score (out of 5)
- Total Responses
- Satisfaction Rate (percentage of clients rating ≥ 4)
- Average Response Time

### 2. Detailed Rating Breakdown
Visual progress bars showing average scores for:
- Timeliness
- Quality
- Professionalism
- Communication

### 3. Satisfaction Trend Chart
Line chart displaying satisfaction scores over the last 7 months with response counts.

### 4. Service Type Breakdown
Bar chart showing the distribution of responses across different service categories with average ratings.

### 5. Recent Client Feedback
List of the most recent client reviews including:
- Client name and service type
- Overall rating and classification
- Detailed feedback comments
- Individual rating scores

## Customization

### Adding More Data

Edit `src/data/csmData.ts` to add more survey responses or modify the sample data:

```typescript
export const surveyResponses: SurveyResponse[] = [
  // Add your survey data here
];
```

### Modifying Colors

Update `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb', // Change primary color
      secondary: '#64748b',
    },
  },
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Sample Data

The dashboard includes sample data for the Administrative Department with:
- 10 recent survey responses
- 5 service categories (Document Processing, Permit Application, Records Request, Certification, General Inquiry)
- 7 months of trend data

## License

This project is for demonstration purposes.

## Support

For questions or issues, please contact the Administrative Department's SCP team.
