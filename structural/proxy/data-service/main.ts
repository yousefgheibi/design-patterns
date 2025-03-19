interface DataService {
  fetchData(id: number): string;
}

class RealDataService implements DataService {
  fetchData(id: number): string {
    console.log(`📡 Get data from server for ID: ${id}`);
    return `Data related to ${id}`;
  }
}

class DataServiceProxy implements DataService {
  private realService: RealDataService;
  private cache: Map<number, string> = new Map();

  constructor(realService: RealDataService) {
    this.realService = realService;
  }

  fetchData(id: number): string {
    if (this.cache.has(id)) {
      console.log(`✅ Get data from cache for ID: ${id}`);
      return this.cache.get(id)!;
    }

    const data = this.realService.fetchData(id);
    this.cache.set(id, data);
    return data;
  }
}

const realService = new RealDataService();
const proxyService = new DataServiceProxy(realService);

console.log(proxyService.fetchData(1));
console.log(proxyService.fetchData(1));
