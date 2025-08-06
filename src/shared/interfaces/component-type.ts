export interface ComponentType {
    name: string;
    description: string;
    icon: string; // Icon class or URL
    route?: string; // Route path for navigation
    isActive?: boolean; // Optional property to indicate if the component is active
    order?: number; // Optional property to define the order of components
    developerOnly?: boolean; // Optional property to indicate if the component is for developers only
    isExternal: boolean; // Optional property to indicate if the component is an external link
    externalUrl?: string; // Optional property for external URL if isExternal is true
    tags?: string[]; // Optional property for tags associated with the component
    additionalInfo?: string; // Optional property for any additional information
    isHidden?: boolean; // Optional property to hide the component from the list
    isDeprecated?: boolean; // Optional property to indicate if the component is deprecated
    lastUpdated?: Date; // Optional property to track the last update date
    version?: string; // Optional property for versioning the component
    relatedComponents?: string[]; // Optional property for related components
    documentationUrl?: string; // Optional property for documentation URL
    isExperimental?: boolean; // Optional property to indicate if the component is experimental
    isFeatured?: boolean; // Optional property to indicate if the component is featured
    isBeta?: boolean; // Optional property to indicate if the component is in beta
    isStable?: boolean; // Optional property to indicate if the component is stable
}
