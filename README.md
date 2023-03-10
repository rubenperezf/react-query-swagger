# POC using react query and swagger

https://github.com/rubenperezf/react-query-swagger-server
https://github.com/rubenperezf/react-query-swagger

## REACT QUERY

### Prerequisites

node >=14.15.4 <15.0
npm >=7.0.0

### Query Retries

When a useQuery query fails (the query function throws an error), React Query will automatically retry the query if that query's request has not reached the max number of consecutive retries (defaults to 3) or a function is provided to determine if a retry is allowed.

You can configure retries both on a global level and an individual query level.

Setting retry = false will disable retries.
Setting retry = 6 will retry failing requests 6 times before showing the final error thrown by the function.
Setting retry = true will infinitely retry failing requests.
Setting retry = (failureCount, error) => ... allows for custom logic based on why the request failed

### Caching

### refetchOnWindowFocus

### ReactQueryDevtools

### Paginated Lagged Queries

```
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => fetchProjects(page),
    keepPreviousData : true
  })
```

### Infinite scroll

```
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })
```
