export interface Conference {
  name: string;
  date: string;
  location: string;
  description: string;
    maxParticipants: number;
  nbParticipants: number;
}
export const conf: Conference[] = [
{
      name: 'Conference 1',
      date: '2023-01-15',
      location: 'New York',
      description: 'Conference 1 desc',
      maxParticipants: 50,
      nbParticipants:10
    },

    {
      name: 'Conference 2',
      date: '2023-02-20',
      location: 'Los Angeles',
      description: 'Conference 2 desc',
      maxParticipants: 40,
      nbParticipants:5
    },

    {
      name: 'Conference 3',
      date: '2027-03-10',
      location: 'Chicago',
      description: 'Conference 1 desc',
      maxParticipants: 50,
      nbParticipants:45
    },
    {
      name: 'Conference 4',
      date: '2026-10-10',
      location: 'North Carolina',
      description: 'Conference 1 desc',
      maxParticipants: 100,
      nbParticipants:88
    },
    {
      name: 'Conference 5',
      date: '2026-10-30',
      location: 'Texas',
      description: 'Conference 1 desc',
      maxParticipants: 30,
      nbParticipants:28
    }

  ];