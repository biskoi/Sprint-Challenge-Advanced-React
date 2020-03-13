- [ ] Why would you use class component over function components (removing hooks from the question)?

        Class components have access to the lifecycle methods, such as CDU/CDM/CWU/etc. It allows us to think more about when we want to display our data, instead of what our data will look like at the end with functional components.

- [ ] Name three lifecycle methods and their purposes.

        componentDidMount runs its code once the component has been mounted. This could be used to fire an axios call.
        componentDidUpdate runs when your component receives new data such as props, or there is a state change. This can be used to display updated information on the page.
        componentWillUnmount runs just before your component is unmounted. This lifecycle method can be used for cleanup, such as removing event listeners.

- [ ] What is the purpose of a custom hook?

        Custom hooks let us extract logic from a component, so that it can be shared and reused by other components. This lets us keep our code dry and a little more optimized.

- [ ] Why is it important to test our apps?

        If we do not test our apps, bugs could make their way into the production build of the app. We want the user experience to be smooth, so we need to ensure functionality before shipping.