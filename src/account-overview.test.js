import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';
import { accountOverviewStub } from './data/account-overview';
import { getPercent, makeSupportAccount } from './use-case/account-overview';

test('renders component title', () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});

test('renders support contact name', () => {
  render(<AccountOverview data={accountOverviewStub} />);
  const element = screen.getByText(accountOverviewStub.supportContact.name);
  expect(element).toBeInTheDocument();
})

test('renders support contact email', () => {
  render(<AccountOverview data={accountOverviewStub} />);

  const data = accountOverviewStub.supportContact

  const email = makeSupportAccount(data.email, data.number)

  const element = screen.getByText(email);
  expect(element).toBeInTheDocument();
})

test('renders feedback successfull percent status (uploads)', () => {
  render(<AccountOverview data={accountOverviewStub} />);

  const data = accountOverviewStub.salesOverview

  const uploadsPercent = `${getPercent(data.successfulUploads, data.uploads)}%`

  const element = screen.getByText(uploadsPercent);
  expect(element).toBeInTheDocument();
})

test('renders feedback successfull percent status (lines)', () => {
  render(<AccountOverview data={accountOverviewStub} />);

  const data = accountOverviewStub.salesOverview

  const linesPercent = `${getPercent(data.linesSaved, data.linesAttempted)}%`
  const element = screen.getByText(linesPercent);

  expect(element).toBeInTheDocument();
})

test('renders feedback successfull uploads number', () => {
  render(<AccountOverview data={accountOverviewStub} />);

  const data = accountOverviewStub.salesOverview

  const linesPercent = `${data.successfulUploads} uploads`;

  const element = screen.getByText(linesPercent);

  expect(element).toBeInTheDocument();
})

test('renders feedback saved lines number', () => {
  render(<AccountOverview data={accountOverviewStub} />);

  const data = accountOverviewStub.salesOverview

  const linesPercent = `${data.linesSaved}`;

  const element = screen.getByText(linesPercent);

  expect(element).toBeInTheDocument();
})


